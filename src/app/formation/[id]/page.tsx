import data from "@/features/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PageParams {
  params: { id: string };
}

function page({ params }: PageParams) {
  const { id } = params;
  const filteredData = data.filter((item) => item.formation[0].slug === id);

  return (
    <div className="flex flex-row justify-center px-32 space-x-2 mt-32 relative">
      <Link href="/" className="absolute flex items-center justify-center font-bold left-3">
        <ArrowLeftIcon /> retour
      </Link>
      <div className="flex flex-col w-[60%]">
        <div className="flex flex-col text-start space-y-4">
          <h1 className="text-4xl font-extrabold">{filteredData[0]?.formation[0].title}</h1>
          <p>{filteredData[0]?.formation[0].description}</p>
          <p>
            <span className="font-mono">Objectif:</span>{filteredData[0]?.formation[0].objectif}
          </p>
          <p>
            <span className="font-mono">Public:</span>{filteredData[0]?.formation[0].public}
          </p>
        </div>
        <div className="flex flex-col text-start space-y-4 mt-10">
          <h1 className="text-4xl font-extrabold">Télécharger le programme</h1>
          <div className="container mx-auto">
            <Tabs defaultValue="Key-Takeways" className="flex flex-col gap-3 p-1 mb-32">
              <TabsList className="flex flex-row w-full justify-between items-center">
                <TabsTrigger value="Key-Takeways">Key Takeways</TabsTrigger>
                <TabsTrigger value="Experte">L&apos;experte</TabsTrigger>
                <TabsTrigger value="Conditions">Conditions</TabsTrigger>
                <TabsTrigger value="Financement">Financement</TabsTrigger>
              </TabsList>
              <TabsContent value="Key-Takeways" className="w-full h-full text-start flex flex-col justify-between items-start gap-6 p-4">
                <span>🔎 Apprenez à écrire du code lisible et facile à maintenir, que vous travailliez seul.e ou en équipe, pour faciliter les futures modifications et résolutions de bugs.</span>
                <span>⏱ Adoptez des bonnes pratiques inspirées de Clean Code, Pragmatic Programmer, et Building Maintainable Software pour prévenir la dette technique et garantir la durabilité du design de vos applications et microservices.</span>
                <span>💡 Explorez des stratégies éprouvées pour rendre votre codebase plus accessible et évolutive, en intégrant des principes de conception maintenable à chaque niveau de votre projet.</span>
                <span>🔧 Mettez en pratique ces concepts grâce à des exercices variés : code reviews, hands-on en solo, mob programming et mob-design, pour transformer ces guidelines en habitudes de codage au quotidien.</span>
              </TabsContent>
              <TabsContent value="Experte" className="w-full h-full text-start flex flex-row justify-between items-center gap-6 p-4">
                <Avatar className="w-36 h-36 border-4 border-slate-400/35 shadow-md">
                  <AvatarImage src={filteredData[0]?.image} />
                  <AvatarFallback>{filteredData[0]?.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <p>{filteredData[0]?.bio}</p>
              </TabsContent>
              <TabsContent value="Conditions" className="w-full h-full flex items-center justify-center p-4">
                <div className="flex flex-col -mt-16 w-[75%]">
                  <p className="py-3 px-6 bg-yellow-300/10">📍 Présentiel (Ile de France) / En ligne</p>
                  <p className="py-3 px-6 flex justify-between items-center">Durée<span>{filteredData[0]?.formation[0].duree} jours</span></p>
                  <p className="py-3 px-6 bg-yellow-300/10 flex justify-between items-center">Nb max. de personnes <span>8</span></p>
                  <p className="py-3 px-6 flex justify-between items-center">Langue(s)</p>
                  <p className="py-3 px-6 bg-yellow-300/10 flex justify-between items-center">Accompte <span>870€</span></p>
                  <p className="py-3 px-6 flex justify-between items-center">Dû le jour de la formation<span>2030 €</span></p>
                  <p className="py-3 px-6 bg-yellow-300/10 flex justify-between items-center">Annulation <span className="font-light text-xs">jusqu&apos;à 5j avant la formation</span></p>
                </div>
              </TabsContent>
              <TabsContent value="Financement" className="w-full h-full text-start flex flex-col justify-between items-start gap-6 -mt-24">
                <p><span className="font-mono">Pour les particuliers:</span> cette formation n&apos;est pas encore éligible au CPF.</p>
                <p><span className="font-mono text-xl">Pour les entreprises:</span> cette formation est éligible aux financements par l&apos;opérateur de compétences (OPCO) de votre branche.</p>
                <Link className="underline" href={`/${id}`}>Trouver mon OPCO</Link>
                <p className="flex flex-col gap-3">Nous pouvons vous accompagner dans vos démarches: <Link className="underline" href={`/${id}`}>rendre contact avec un de nos conseillers.</Link></p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="flex w-[40%] h-[450px]">
        <Card className="w-full pl-3">
          <CardHeader className="flex space-y-0 flex-row justify-between items-center px-2 pb-11">
            <CardTitle className="w-[50%] text-xl text-start font-extrabold">
              {filteredData[0]?.formation[0].title}
            </CardTitle>
            <Avatar className="w-16 h-16 border-4 border-slate-400/35 shadow-md">
              <AvatarImage src={filteredData[0]?.image} />
              <AvatarFallback>{filteredData[0]?.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="px-3 flex flex-col pb-11">
            <div className="px-3 flex flex-row space-x-20 items-center pb-11">
              <div className="flex flex-col gap-1">
                <p>Prix pp.</p>
                <p>{filteredData[0]?.formation[0].prix} €</p>
              </div>
              <div className="flex flex-col gap-1">
                <p>Durée</p>
                <p>{filteredData[0]?.formation[0].duree} jrs</p>
              </div>
            </div>
            <form className="flex flex-col space-y-3 relative">
              <label htmlFor="email" className="text-sm">Etre tenu informé.e des prochaines sessions et ressources disponibles:</label>
              <input id="email" type="email" placeholder="Email" className="w-full p-3 border border-slate-400 rounded-lg outline-none" />
              <button title="Envoyer" className="w-16 p-2 bg-yellow-300 text-white rounded-full flex items-center justify-center shadow-md shadow-slate-300 absolute right-2 top-11"><ArrowRight /></button>
            </form>
          </CardContent>
          <CardFooter className="flex items-center justify-center space-y-3">
            <p className="font-thin underline text-sm"> Téléchargez le programme</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default page;
