/*
 * @Author: mingxing.zhong
 * @Date: 2021-08-12 16:41:23
 * @Description: Demo
 */

import type {
  AppendMemoryRecord,
  MemoryRecord,
} from "@/components/MemoryManager";
import MemoryManager from "@/components/MemoryManager";
import { Button, InputNumber, Select, Space } from "antd";
import React, { useEffect, useState } from "react";

export default (): React.ReactNode => {
  const [appendRecord, setAppendRecord] = useState<AppendMemoryRecord>({
    label: "c",
    length: 4,
  });
  const [storedRecords, setStoredRecords] = useState<MemoryRecord[]>([]);
  const [size, setSize] = useState<number>(64);

  useEffect(() => {
    setStoredRecords([
      { label: "a", startBit: 0, length: 2 },
      { label: "b", startBit: 1, length: 8 },
    ]);
  }, []);

  return (
    <div>
      <Space direction="vertical">
        <div>
          <Space>
            Size:
            <InputNumber
              style={{ width: 120 }}
              defaultValue={64}
              onChange={setSize}
            />
            Label:
            <Select
              style={{ width: 120 }}
              defaultValue={"c"}
              options={[
                { label: "a", value: "a" },
                { label: "b", value: "b" },
                { label: "c", value: "c" },
                { label: "d", value: "d" },
                { label: "e", value: "e" },
                { label: "f", value: "f" },
                { label: "g", value: "g" },
                { label: "h", value: "h" },
                { label: "i", value: "i" },
                { label: "j", value: "j" },
                { label: "k", value: "k" },
                { label: "l", value: "l" },
                { label: "m", value: "m" },
                { label: "n", value: "n" },
                { label: "o", value: "o" },
                { label: "p", value: "p" },
                { label: "q", value: "q" },
                { label: "r", value: "r" },
                { label: "s", value: "s" },
                { label: "t", value: "t" },
                { label: "u", value: "u" },
                { label: "v", value: "v" },
                { label: "w", value: "w" },
                { label: "x", value: "x" },
                { label: "y", value: "y" },
                { label: "z", value: "z" },
              ]}
              onChange={(label: string) =>
                setAppendRecord((record) => ({
                  length: record?.length || 0,
                  label,
                }))
              }
            />
            Length:
            <Select
              style={{ width: 120 }}
              defaultValue={4}
              options={[
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "4", value: 4 },
                { label: "5", value: 5 },
                { label: "6", value: 6 },
                { label: "7", value: 7 },
                { label: "8", value: 8 },
                { label: "9", value: 9 },
              ]}
              onChange={(length: number) =>
                setAppendRecord((record) => ({
                  label: record?.label || "",
                  length,
                }))
              }
            />
            <Button onClick={() => setStoredRecords([])} type="primary">
              清除记录
            </Button>
          </Space>
        </div>

        <MemoryManager
          storedRecords={storedRecords}
          appendRecord={appendRecord}
          size={size}
          onChange={setStoredRecords}
        />

        <div>appendRecord: {JSON.stringify(appendRecord)}</div>

        <div>storedRecords: {JSON.stringify(storedRecords)}</div>
      </Space>
    </div>
  );
};
