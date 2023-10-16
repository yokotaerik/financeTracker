
export default function Modal({ show, onClose, children }) {
    
        return (
        <>
          {/* Modal */}
          <div
          style={{
            transform: show ? "translateY(0%)" : "translateY(-200%)",
          }}
          className="absolute top-0 left-0 w-full h-full z-10 transition-all duration-700"
        >
          <div className="container mx-auto max-w-2xl h-[70vh] rounded-2xl bg-stone-800 py-6 px-4">
            <button
              className="w-10 h-10 mb-4 font-bold text-2xl"
              onClick={(e) => onClose(false)}
            >
              X
            </button>
            {children}
          </div>
        </div>
        </>
        )
}