import Item from "../components/Item";

export default function List() {
  const list = [
    {
      name: "1",
      title: "esgafharh",
      date: "01/01424051/34634/602",
      src: "phub.com",
      descr: "huynya ebanaya",
      id: "007",
    },
    {
      name: "2",
      title: "sdgarhaerh",
      date: "01/01424051/34634/602",
      src: "phub.com",
      descr: "huynya ebanaya",
      id: "007",
    },
    {
      name: "3",
      title: "qwegqweg",
      date: "01/01424051/34634/602",
      src: "phub.com",
      descr: "huynya ebanaya",
      id: "007",
    },
  ];
  return (
    <div>
      {list.map((el) => (
        <Item
          date={el.date}
          src={el.src}
          name={el.name}
          descr={el.descr}
          id={el.id}
        />
      ))}
    </div>
  );
}
