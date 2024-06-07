import "./index.css"

export default function CoffeeBrewer(brewer: string) {
  return (
    <div>
      <img className="brewerpics" src={brewer} alt={brewer} />
    </div>
  )
}
