import { Link, useNavigate } from "react-router-dom";
import { Button } from './ui/button';
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "./ui/dropdown-menu";
import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "./ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";

const Header = () => {
    const navigate = useNavigate();
    const user = true;

  return (
    <nav className="py-4 flex justify-between items-center border-b-white">
        <Link to="/">
            <img src='/logo.svg' className='h-16' alt='logo' />
        </Link>

        <div>
            {
                !user ?
                    <Button onClick={() => navigate("/auth")}>Login</Button>
                : (
                    <DropdownMenu>
                    <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="flex gap-2"><LinkIcon className="h-4 w-4"/>My Links</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400 flex gap-2"><LogOut className="h-4 w-4"/> Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
            }
        </div>
    </nav>
  )
}

export default Header