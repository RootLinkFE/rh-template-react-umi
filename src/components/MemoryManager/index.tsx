/*
 * @Author: mingxing.zhong
 * @Date: 2021-07-15 15:22:31
 * @Description: 内存管理器
 */

import { Alert, Col, Row } from "antd";
import { ceil } from "lodash";
import type { Key } from "react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./index.module.less";

// 内存记录
export type MemoryRecord = {
  label: Key; // 标识
  startBit: number; // 起始位
  length: number; // 内存长度（单位：bit）
};

export type AppendMemoryRecord = Pick<MemoryRecord, "label" | "length">;

// 内存单元
type MemoryCell = {
  key: Key; // 唯一标识
  label?: Key; // 标识
  status: "FREE" | "DISABLED" | "USED"; // 状态
};

type MemoryManagerProps = {
  disabled?: boolean; // 是否禁用
  size?: number; // 存储大小（单位：bit）
  appendRecord?: AppendMemoryRecord; // 要添加的内存记录
  storedRecords?: MemoryRecord[]; // 已存储的内存记录
  onChange?: (records: MemoryRecord[]) => void; // 内存记录改变回调
};

const MemoryManager: React.FC<MemoryManagerProps> = ({
  disabled = false,
  size = 64,
  appendRecord = null,
  storedRecords = [],
  onChange = () => {},
}) => {
  const [messageText, setMessageText] = useState(""); // 错误信息
  const messageTextTimerRef = useRef<any>(null);

  /**
   * 生成内存单元组
   */
  const memoryCells = useMemo(() => {
    // 补充到8的整数倍
    const properSize = ceil(size / 8) * 8;

    // FREE
    let newMemoryCells: MemoryCell[] = Array.from({ length: size }).map(
      (item, index) => ({
        key: index,
        status: "FREE",
      })
    );

    // USED
    if (Array.isArray(storedRecords)) {
      storedRecords.forEach((record) => {
        const { startBit, length, label } = record;

        /**
         * 把需要修改的部分取出来，修改后再放回原数组
         */
        let cells = newMemoryCells.splice(startBit, length);
        cells = cells.map((cell) => ({ ...cell, label, status: "USED" }));
        newMemoryCells.splice(startBit, 0, ...cells);
      });
    }

    // 补充数组
    const padCells: MemoryCell[] = Array.from({
      length: properSize - size,
    }).map((item, index) => ({
      key: size + index,
      status: "DISABLED",
    }));

    // DISABLED
    newMemoryCells = newMemoryCells.concat(padCells);

    return newMemoryCells;
  }, [size, storedRecords]);

  /**
   * 字节坐标数组
   */
  const byteAxisNumbers = useMemo(() => {
    return Array.from({ length: ceil(size / 8) }).map(
      (item, index) => index + 1
    );
  }, [size]);

  /**
   * 空闲统计
   */
  const freeTotal = useMemo(() => {
    let total = 0;

    memoryCells.forEach((cell) => {
      total += cell.status === "FREE" ? 1 : 0;
    });

    return total;
  }, [memoryCells]);

  /**
   * 已用统计
   */
  const usedTotal = useMemo(() => {
    let total = 0;

    memoryCells.forEach((cell) => {
      total += cell.status === "USED" ? 1 : 0;
    });

    return total;
  }, [memoryCells]);

  /**
   * 显示错误信息
   */
  const showMessage = useCallback((text) => {
    clearTimeout(messageTextTimerRef.current);
    setMessageText(text);

    messageTextTimerRef.current = setTimeout(() => setMessageText(""), 2000);
  }, []);

  /**
   * 内存单元点击回调
   * @param targetCell 被点击的内存单元
   * @param index 点击的下标
   * @returns
   */
  const onCellClick = (targetCell: MemoryCell, index: number) => {
    if (disabled) {
      return;
    }

    setMessageText("");

    if (!appendRecord) {
      showMessage("请先选择设置对象");
      return;
    }

    if (targetCell.status !== "FREE") {
      showMessage("请选择空闲的内存空间");
      return;
    }

    if (!appendRecord.label || !appendRecord.length) {
      showMessage("设置对象格式有误");
      return;
    }

    if (storedRecords.some((record) => record.label === appendRecord.label)) {
      showMessage(`对象 ${appendRecord.label} 已被设置，如需改动先清除`);
      return;
    }

    if (index + appendRecord.length > size) {
      showMessage("连续内存不够，请重新选择");
      return;
    }

    // 将要被覆盖的区域
    const cells = memoryCells.slice(index, index + appendRecord.length);

    if (cells.some((cell) => cell.status !== "FREE")) {
      showMessage("连续内存不够，请重新选择");
      return;
    }

    onChange([...storedRecords, { ...appendRecord, startBit: index }]);
  };

  /**
   * 销毁延时任务
   */
  useEffect(() => {
    return () => clearTimeout(messageTextTimerRef.current);
  }, []);

  /**
   * 大小改变时已存储记录可能装不下，直接丢弃
   */
  useEffect(() => {
    if (Array.isArray(storedRecords)) {
      const newStoredRecords = storedRecords.filter((record) => {
        const { startBit, length } = record;

        if (startBit + length > size) {
          return false;
        }

        return true;
      });

      if (newStoredRecords.length !== storedRecords.length) {
        onChange(newStoredRecords);
      }
    }
  }, [onChange, size, storedRecords]);

  return (
    <div className="memory-manager">
      <div className={styles.header}>
        <Row justify="space-around">
          <Col className={`${styles.legend} ${styles.free}`}>
            空闲 {freeTotal}
          </Col>
          <Col className={`${styles.legend} ${styles.used}`}>
            已选 {usedTotal}
          </Col>
        </Row>
      </div>

      <div className={styles.content}>
        <Row align="middle">
          {/* 对角 */}
          <div className={styles.corner}>
            <div className={styles.byteLabel}>字节</div>
            <div className={styles.bitLabel}>位</div>
          </div>

          {/* 位坐标 */}
          <div className={styles.bitAxis}>
            {[8, 7, 6, 5, 4, 3, 2, 1].map((axis) => (
              <div key={axis} className={styles.axis}>
                {axis}
              </div>
            ))}
          </div>
        </Row>

        <Row align="middle" className={styles.matrixContainer}>
          {/* 字节坐标 */}
          <div className={styles.byteAxis}>
            {byteAxisNumbers.map((axis) => (
              <div key={axis} className={styles.axis}>
                {axis}
              </div>
            ))}
          </div>

          {/* 矩阵 */}
          <div className={styles.matrix}>
            {memoryCells.map((cell, index) => (
              <div
                onClick={() => onCellClick(cell, index)}
                key={cell.key}
                className={`
                ${styles.cell}
                ${cell.status === "DISABLED" ? styles.disabled : ""}
                ${cell.status === "FREE" ? styles.free : ""}
                ${cell.status === "USED" ? styles.used : ""}
              `}
              >
                {cell.label}
              </div>
            ))}
          </div>
        </Row>
      </div>

      {/* toast */}
      {messageText && (
        <div className={styles.toast}>
          <Alert message={messageText} type="warning" showIcon />
        </div>
      )}
    </div>
  );
};

export default MemoryManager;
