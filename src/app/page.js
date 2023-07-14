import AddProduct from "@/Components/AddProduct/AddProduct";
import TopicList from "@/Components/TopicList/TopicList";

const getTopic = async () => {
  const res = await fetch("http://localhost:3000/api/topics", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed To fetch");
  }
  return res.json();
};

export default async function Home() {
  const { topics } = await getTopic();
  console.log(topics);

  return (
    <main>
      <AddProduct></AddProduct>
      <TopicList topics={topics}></TopicList>
    </main>
  );
}
