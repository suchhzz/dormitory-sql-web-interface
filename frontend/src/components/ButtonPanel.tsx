import { useEffect, useState } from "react";
import InsertModal from "./insert-modal/InsertModal";
import SelectModal from "./select-modal/SelectModal";
import { translateTableName } from "../services/translateColumns";

export default function ButtonPanel({
  tableColumnItems,
  tableName,
  editValues,
  clearEditValue,
  activeColumns,
  updateActiveColumns,
  clearActiveColumns,
  primaryKeys,
  executeUpdate,
  executeInsert,
  executeSelect,
}: {
  tableColumnItems: string[];
  tableName: string;
  editValues: string[];
  clearEditValue: () => void;
  activeColumns: number[];
  updateActiveColumns: (updater: (prev: number[]) => number[]) => void;
  clearActiveColumns: () => void;
  primaryKeys: number[];
  executeUpdate: (inputValues: string[]) => void;
  executeInsert: (inputValues: string[]) => void;
  executeSelect: () => void;
}) {
  const [isInsertModalActive, setIsInsertModalActive] =
    useState<boolean>(false);
  const [isSelectModalActive, setIsSelectModalActive] =
    useState<boolean>(false);

  useEffect(() => {
    if (editValues.length > 0) {
      toggleInsertModal();
    }
  }, [editValues]);

  const toggleInsertModal = () => {
    if (isInsertModalActive) {
      clearEditValue();
      console.log("modal, clearing");
    }

    setIsInsertModalActive(!isInsertModalActive);
  };

  const toggleSelectModal = () => {
    setIsSelectModalActive(!isSelectModalActive);
  };

  return (
    <>
      <div className="buttons d-flex">
        <button
          id="insertBtn"
          className="button-item template-button template-button--blue"
          onClick={toggleInsertModal}
        >
          Додати {translateTableName(tableName)}
        </button>
        <button
          id="selectBtn"
          className="button-item template-button template-button--green"
          onClick={toggleSelectModal}
        >
          Вибрати {translateTableName(tableName)}
        </button>
      </div>

      <InsertModal
        isActive={isInsertModalActive}
        handlerCloseModal={toggleInsertModal}
        tableColumnItems={tableColumnItems}
        editValues={editValues}
        tableName={tableName}
        clearEditValue={clearEditValue}
        primaryKeys={primaryKeys}
        executeUpdate={executeUpdate}
        executeInsert={executeInsert}
      />
      <SelectModal
        isActive={isSelectModalActive}
        handlerCloseModal={toggleSelectModal}
        tableColumnItems={tableColumnItems}
        tableName={tableName}
        activeColumns={activeColumns}
        updateActiveColumns={updateActiveColumns}
        clearActiveColumns={clearActiveColumns}
        executeSelect={executeSelect}
      />
    </>
  );
}
