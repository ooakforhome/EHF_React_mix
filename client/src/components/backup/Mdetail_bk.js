import{ Md } from "./Md"
export const Mdetail = ({mas}) => {
  return(
  <div>
    {mas.map((ma,i)=>
        <Md key={i}
          {...ma}/>
      )}
  </div>
)
}
