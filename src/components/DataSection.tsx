interface Props {
  title: string;
  content: string;
}

export default function DataSection({ title, content }: Props) {
  return (
    <section className=" mb-2">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}
