import { Avatar, Text } from "@mantine/core";

const UserBadge = ({ initials, fullName, email }) => {
  return (
    <>
      <Avatar radius="lg" size="lg">
        {initials}
      </Avatar>
      <Text>{fullName}</Text>
      <Text>{email}</Text>
    </>
  )
}

export default UserBadge
