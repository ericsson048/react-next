import CardList from "@/components/CardList";

export default function Home() {
  
  return (
    <main className="flex flex-col mt-10 justify-center items-center px-14">
          <h1 className="text-lg text-center">Des formations avancées qui s&apos;adaptent à votre besoin et à votre contexte technique.</h1>
            <CardList/>
    </main>
  );
}
