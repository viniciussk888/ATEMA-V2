import {
    createContext,
    ReactElement,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

export interface UserProviderProps {
    children: ReactNode;
}

interface UserType {
    username: string,
    admin: boolean,
    blog: boolean,
    insert: boolean,
    update: boolean,
}

interface UserProvider {
    user: UserType,
    email: string,
    setNewUser: (value: {}) => void;
    setNewToken: (value: string) => void;
    setNewEmail: (value: string) => void;
    token: string,
    checkPermission: (value: string) => boolean;
}

const UserContext = createContext<UserProvider>({
    user: {
        username: "",
        admin: false,
        blog: false,
        insert: false,
        update: false,
    },
    token: "",
    email: "",
    setNewUser: () => { },
    setNewToken: () => { },
    setNewEmail: () => { },
    checkPermission: () => false,
});

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState({
        username: "",
        admin: false,
        blog: false,
        insert: false,
        update: false,
    });
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setUser(localStorage.getItem('@atema/user') ? JSON.parse(localStorage.getItem('@atema/user')) : {});
        setToken(localStorage.getItem('@atema/token') ? localStorage.getItem('@atema/token') : "");
        setEmail(localStorage.getItem('@atema/email') ? localStorage.getItem('@atema/email') : "");
    }, [])

    const setNewUser = (value: UserType) => {
        setUser(value);
        localStorage.setItem('@atema/user', JSON.stringify(value));
    }
    const setNewEmail = (value: string) => {
        setEmail(value);
        localStorage.setItem('@atema/email', value);
    }
    const setNewToken = (value: string) => {
        setToken(value);
        localStorage.setItem('@atema/token', value);
    }

    const checkPermission = (value: string) => {
        if (user[value]) {
            return user[value]
        }
    }

    return (
        <UserContext.Provider value={{ user, setNewUser, email, setNewEmail, token, setNewToken, checkPermission }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserSession = () => useContext(UserContext);
