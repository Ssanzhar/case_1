import Item from "../components/Item";

export default function List() {
  const list = [
    {
      name: "1",
      title: "esgafharh",
      date: "01/01424051/34634/602",
      link: "phub.com",
      descr: "huynya ebanaya",
      id: "007",
    },
    {
      name: "2",
      title: "sdgarhaerh",
      date: "01/01424051/34634/602",
      link: "phub.com",
      descr: "huynya ebanaya",
      id: "007",
    },
    {
      name: "3",
      title: "qwegqweg",
      date: "01/01424051/34634/602",
      link: "phub.com",
      descr: "huynya ebanaya",
      id: "007",
    },
  ];
  return (
    <div>
      {list.map((el) => (
        <Item
          date={el.date}
          link={el.link}
          title={el.title}
          description={el.descr}
          id={el.id}
        />
      ))}
    </div>
  );
}
