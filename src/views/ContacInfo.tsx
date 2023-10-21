import ContactInfoCard from "@/components/ContactInfoCard";
import ContactInfoForm from "@/components/ContactInfoForm";
import NavMenu from "@/components/NavMenu";
import { Context, RootState } from "@/states/RootState";
import { useContext } from "react";



export default function ContactInfo() {
  // @ts-ignore
  const [state, dispatch] = useContext(Context);

  return (
    <Context.Consumer>{() => {
      return <div className="w-full h-full">
        <NavMenu />
        <div className="flex flex-col gap-6">
          <ContactInfoCard contact={(state as RootState).IdentificationStore} />
          <ContactInfoForm dispatch={dispatch} />
        </div>
      </div>
    }
    }
    </Context.Consumer>
  )
}
