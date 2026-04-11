import Image from "next/image";

export function NavbarBrand() {
  return (
    <span className="navbar-brand group relative inline-flex h-[34px] w-[108px] items-center justify-center sm:h-[38px] sm:w-[138px]">
      <span className="navbar-brand__shadow navbar-brand__shadow--light pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-[opacity,transform] duration-180 ease-out group-hover:-translate-x-[2px] group-hover:translate-y-[2px] group-hover:opacity-100 group-focus-visible:-translate-x-[2px] group-focus-visible:translate-y-[2px] group-focus-visible:opacity-100 sm:group-hover:-translate-x-[3px] sm:group-hover:translate-y-[3px] sm:group-focus-visible:-translate-x-[3px] sm:group-focus-visible:translate-y-[3px]">
        <Image
          src="/Logo-enderecamento/logo-enderecamento-sem-fundo.png"
          alt=""
          aria-hidden="true"
          width={136}
          height={38}
          className="h-auto w-[92px] [filter:brightness(0)_saturate(100%)] sm:w-[118px]"
        />
      </span>
      <span className="navbar-brand__shadow navbar-brand__shadow--dark pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-[opacity,transform] duration-180 ease-out group-hover:-translate-x-[2px] group-hover:translate-y-[2px] group-hover:opacity-100 group-focus-visible:-translate-x-[2px] group-focus-visible:translate-y-[2px] group-focus-visible:opacity-100 sm:group-hover:-translate-x-[3px] sm:group-hover:translate-y-[3px] sm:group-focus-visible:-translate-x-[3px] sm:group-focus-visible:translate-y-[3px]">
        <Image
          src="/Logo-enderecamento/sombra g80 branco.png"
          alt=""
          aria-hidden="true"
          width={136}
          height={38}
          className="h-auto w-[92px] sm:w-[118px]"
        />
      </span>
      <span className="relative z-10 flex items-center justify-center transition-transform duration-180 ease-out group-hover:translate-x-[1px] group-hover:-translate-y-[1px] group-focus-visible:translate-x-[1px] group-focus-visible:-translate-y-[1px]">
        <Image
          src="/Logo-enderecamento/logo-enderecamento-sem-fundo.png"
          alt="Gate80"
          width={136}
          height={38}
          priority
          className="h-auto w-[92px] sm:w-[118px]"
        />
      </span>
    </span>
  );
}
