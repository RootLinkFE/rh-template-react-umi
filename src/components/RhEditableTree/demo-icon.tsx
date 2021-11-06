import RhEditableTree from '@/components/RhEditableTree';
import { CaretDownOutlined } from '@ant-design/icons';
import IconNode from '../../assets/images/tree/node.svg';
import IconModel from '../../assets/images/tree/model.svg';
import IconLeaf from '../../assets/images/tree/property.svg';

const Demo = () => {
  const dataList = [
    {
      id: 1,
      name: '挖掘机',
      parentId: null,
      type: 'model',
      icon: null,
    },
    {
      id: 2,
      name: '油缸',
      parentId: 1,
      type: 'model',
      icon: null,
    },
    {
      id: 8,
      name: '泵机',
      parentId: null,
      type: 'model',
    },
    {
      id: 9,
      name: 'Node',
      parentId: 8,
      type: 'node',
    },
    {
      id: 10,
      name: 'aaa属性',
      parentId: 8,
      type: 'attribute',
    },
    {
      id: 11,
      name: 'xxx属性',
      parentId: 8,
      type: 'attribute',
    },
  ];

  return (
    <div className="flex">
      <RhEditableTree
        search={false}
        editable={false}
        showIcon
        iconRender={(nodeType?: string) => {
          if (nodeType === 'model') {
            return IconModel;
          }
          if (nodeType === 'node') {
            return IconNode;
          }
          return IconLeaf;
        }}
        showLine={{ showLeafIcon: false }}
        switcherIcon={<CaretDownOutlined />}
        height={300}
        list={dataList as any}
      />
    </div>
  );
};
export default Demo;
