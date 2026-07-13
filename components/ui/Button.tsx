import Link from "next/link";

interface Props{

href:string;

children:React.ReactNode;

primary?:boolean;

}

export default function Button({

href,

children,

primary=true

}:Props){

return(

<Link

href={href}

className={`

inline-flex

items-center

rounded-full

px-7

py-4

font-semibold

transition-all

duration-300

${

primary

?

"bg-gradient-to-r from-violet-500 to-indigo-500 hover:scale-105 hover:shadow-[0_0_45px_rgba(124,92,255,.45)]"

:

"border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10"

}

`}

>

{children}

</Link>

);

}