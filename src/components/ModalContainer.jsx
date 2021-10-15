import ReactDom from "react-dom";

export default function ModalContainer({ modal, setModal }) {
  if (modal === null) return null;

  return ReactDom.createPortal(
    <>
      <div onClick={() => setModal(null)} className="modal-background"></div>
      <div className="modal-window ">
        {modal}
      </div>
    </>,
    document.getElementById("modal")
  );
}
