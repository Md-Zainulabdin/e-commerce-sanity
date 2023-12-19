interface ILayoutprops {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: ILayoutprops) => {
  return <>{children}</>;
};

export default AuthLayout;
