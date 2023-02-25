
const Card = ({image,title,description,next}) => {
  return (
    <div className="flex flex-col justify-center text-center items-center border-solid border-4 border-sky-500 mt-10 rounded-2xl w-96">
        <img src={image} alt="logo" className="mt-10 h-48"/>
        <h1 className="mt5 font-bold text-cyan-500">{title}</h1>
        <p className="mt-5 px-4 text-justify">{description}</p>
        <button onClick={next} className="mt-10 mb-10">Siguiente</button>
    </div>
  )
}

export default Card