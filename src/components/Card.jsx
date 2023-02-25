
const Card = ({image,title,description,next}) => {
  return (
    <div className="flex flex-col justify-center text-center items-center">
        <img src={image} alt="logo" className="mt-10 h-48"/>
        <h1 className="mt-10 font-bold text-cyan-500">{title}</h1>
        <p className="mt-10">{description}</p>
        <button onClick={next} className="mt-10">Siguiente</button>
    </div>
  )
}

export default Card