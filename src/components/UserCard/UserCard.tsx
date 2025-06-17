/* eslint-disable react-hooks/rules-of-hooks */
import React, { type PropsWithChildren } from "react";
import type { TUser } from "../../types/TUser";
import { UserCardContext, useUserCardContext } from "../../context/UserCardContext";
import { Avatar, Typography, type AvatarProps, type TypographyProps } from "@mui/material";

type UserCardProps = {
  user: TUser;
};
const UserCard = ({ user, children }: PropsWithChildren<UserCardProps>) => {
  return <UserCardContext.Provider value={user}>{children}</UserCardContext.Provider>;
};

export default UserCard;

UserCard.FirstName = ({ ...props }: Omit<TypographyProps, "children">) => {
  const { firstName } = useUserCardContext();

  return <Typography {...props}>{firstName}</Typography>;
};

UserCard.LastName = ({ ...props }: Omit<TypographyProps, "children">) => {
  const { lastName } = useUserCardContext();

  return <Typography {...props}>{lastName}</Typography>;
};

UserCard.FullName = ({ ...props }: Omit<TypographyProps, "children">) => {
  const { firstName, lastName } = useUserCardContext();

  return (
    <Typography {...props}>
      {firstName} {lastName}
    </Typography>
  );
};

UserCard.Email = ({ ...props }: Omit<TypographyProps, "children">) => {
  const { email } = useUserCardContext();

  return <Typography {...props}>{email}</Typography>;
};

UserCard.Avatar = ({ ...props }: Omit<AvatarProps, "alt" | "src">) => {
  const { image } = useUserCardContext();

  return <Avatar {...props} src={image ?? undefined} />;
};

UserCard.PhoneNumber = ({ ...props }: Omit<TypographyProps, "children">) => {
  const { phoneNumber } = useUserCardContext();
  return phoneNumber ? <Typography {...props}>{phoneNumber}</Typography> : <></>;
};
