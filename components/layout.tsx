type ChildrenProps = {children: React.ReactNode};

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <h1>Nav Bar Go Here</h1>
      <main>{ children }</main>
      <h1>Footer Go Here</h1>
    </>
  );
}
