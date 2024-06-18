export type TLayout = Readonly<{
  children: React.ReactNode;
}>;

export type TSideBarLinks = {
  icon: string;
  label: string;
  link: string;
}[];

export type TMeetingCard = {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
};
