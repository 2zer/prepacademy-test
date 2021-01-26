export default function CallToAction({action, text}) {
  return (
    <button onClick={action} className="cta">{text}</button>
  )
}