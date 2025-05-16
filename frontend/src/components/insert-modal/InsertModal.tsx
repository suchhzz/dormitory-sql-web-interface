import InsertModalBody from "./InsertModalBody";

export default function InsertModal({
  isActive,
  handlerCloseModal,
  tableColumnItems,
  tableName,
  editValues,
  clearEditValue,
  primaryKeys,
  executeUpdate,
  executeInsert,
}: {
  isActive: boolean;
  handlerCloseModal: () => void;
  tableName: string;
  tableColumnItems: string[];
  editValues: string[];
  clearEditValue: () => void;
  primaryKeys: number[];
  executeUpdate: (inputValues: string[]) => void;
  executeInsert: (inputValues: string[]) => void;
}) {
  return (
    <>
      <div id="insertModal" className={`modal ${isActive ? "active" : ""}`}>
        <div className="relative-container">
          <div className="modal-container">
            <div className="modal-wrapper d-grid">
              <button
                id="closeModal"
                className="close-button close-button-modal"
                onClick={handlerCloseModal}
              >
                X
              </button>
              <div className="modal-header">
                <p className="modal-title">
                  {editValues.length > 0 ? "Update" : "Insert"}
                </p>
              </div>
              <InsertModalBody
                tableColumnItems={tableColumnItems}
                editValues={editValues}
                tableName={tableName}
                clearEditValue={clearEditValue}
                primaryKeys={primaryKeys}
                executeUpdate={executeUpdate}
                executeInsert={executeInsert}
              />
            </div>
          </div>
          <div className="modal-overlay"></div>
        </div>
      </div>
    </>
  );
}
