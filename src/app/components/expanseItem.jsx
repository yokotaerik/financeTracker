import CurrencyFormatter from "../lib/utils";

export default function ExpanseItem({ color, tittle, total }) {
  return (
    <>
      <button>
        {/* Expanses Item */}
        <div className="flex items-center justify-between px-4 py-3 bg-stone-700 rounded-2xl">
          <div className="flex items-center gap-2">
            <div
              className="w-[25px] h-[25px] rounded-full"
              style={{ background: color }}
            />
            <h4 className="capitalize ">{tittle}</h4>
          </div>
          <p>{CurrencyFormatter(total)}</p>
        </div>
      </button>
    </>
  );
}
