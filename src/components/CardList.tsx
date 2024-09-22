import data from "@/features/data";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import ButtomCard from "./Buttom";


function CardList() {
  return (
    <div className="p-3 flex flex-wrap space-x-3 gap-3 mt-3">
            {data.map((item)=>{
                return(
                  <Card key={item.id} className="w-[31%]  hover:shadow-xl duration-300 transition-all">
                    <CardHeader className="flex space-y-0 flex-row justify-between items-center p-2">
                        <CardTitle className="w-[50%] text-xl text-start font-extrabold">
                            {item.formation[0].title}
                        </CardTitle>
                        <Avatar className="w-16 h-16 border-4 border-slate-400/35  shadow-md">
                            <AvatarImage src={item.image} />
                            <AvatarFallback>{item.name.slice(0,2)}</AvatarFallback>
                        </Avatar>
                    </CardHeader>
                    <CardContent className="p-3 flex flex-row justify-between items-center">
                        <div className="flex flex-col gap-3 space-y-3">
                        <p>Durée</p>
                        <p>{item.formation[0].duree} jrs</p>
                        </div>
                        <div className="flex flex-col gap-3 space-y-3">
                        <p>Prochaine session:</p>
                        <p className="font-light">31 oct</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-center flex-col space-y-3">
                        <span className="w-6 h-[1px] bg-black"></span>
                        <ButtomCard link={`/formation/${item.formation[0].slug}`} name="Decouvrir"/>
                        <p className="font-thin underline text-sm"> Téléchargez le programme</p>
                    </CardFooter>
                  </Card>
                )
              })} 
              </div>  
  )
}

export default CardList

