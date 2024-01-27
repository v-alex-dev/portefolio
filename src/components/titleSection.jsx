const TitleSection = ({title, urlIcon}) => {
  return(
      <div id={title} className={"w-72 bg-dark flex absolute top-0  rounded  "}>
          <div className={"bg-orange w-12 flex justify-center items-center p-2 rounded-l"}>
              <img src={urlIcon} alt={title}/>
          </div>
        <h2 className={"font-bold text-center text-3xl text-white flex justify-center items-center ml-2"}>{title}</h2>
      </div>
  )
}
export default TitleSection;