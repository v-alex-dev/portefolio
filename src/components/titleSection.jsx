const TitleSection = ({title, urlImg}) => {

    return(
        <div className={"flex flex-row-reverse bg-dark items-center m-4 w-full"}>
            <h2 className={"text-white text-center w-full text-4xl"}>{title}</h2>
            <img className={"w-5 basis-1/5 fill-white bg-light-orange p-4"} src={urlImg} alt={title}/>
        </div>
  )
}
export default TitleSection