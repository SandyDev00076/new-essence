interface Props {
  title: string;
  content: string;
}

export default function DataSection({ title, content }: Props) {
  return (
    <section className=" mb-8">
      <h2 className="text-3xl text-green-400 font-semibold mb-2">{title}</h2>
      <p className="text-white text-lg">{content}</p>
    </section>
  );
}
