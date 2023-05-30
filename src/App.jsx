import "./App.css"
import {
  MantineProvider,
  AppShell,
  Navbar,
  Header,
  NavLink,
} from "@mantine/core"
import { Compass, Home2, Search, Books } from "tabler-icons-react"
import UserBadge from "./Components/UserBadge"

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={1000} p="xs">
            {/* Navbar content */}
            <NavLink
              label="Home"
              icon={<Home2 strokeWidth={2} color={"black"} />}
            />
            <NavLink
              label="Browse"
              icon={<Compass s strokeWidth={2} color={"black"} />}
            />
            <NavLink
              label="Search"
              icon={<Search strokeWidth={2} color={"black"} />}
            />
            <NavLink
              label="Library"
              icon={<Books strokeWidth={2} color={"black"} />}
            />
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            {/* Header content */}
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
          <>
            <UserBadge
              initials={"DH"}
              email={"diana@gmail.com"}
              fullName={"Diana Hutan"}
            />
          </>
      </AppShell>
    </MantineProvider>
  )
}

export default App
