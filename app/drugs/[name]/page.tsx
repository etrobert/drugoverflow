type Props = { params: { name: string } };

export default function Drug({ params }: Props) {
  return <h1>{params.name}</h1>;
}
