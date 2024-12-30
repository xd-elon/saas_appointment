import { useSelector } from "react-redux";
import { AppointmentContentView } from "../../components/AppointmentContentView";
import { FooterTableAppointment } from "../../components/FooterTableAppointment";
import { Header } from "../../components/Header";
import { ModalCreateAppointment } from "../../components/Modals/ModalCreateAppointment";
import { RootState } from "../../store/store";

export function Appointments() {
  const { modalCreate } = useSelector((state: RootState) => state.appointments);
  
  return (
    <main className="bg-primary-bluecommon py-6 px-8 h-[100vh] relative">
      <Header />
      <AppointmentContentView />
      <FooterTableAppointment />
      <ModalCreateAppointment 
        isOpen={modalCreate} 
        onClose={() => ""} 
        onSave={() => ""} 
      />
    </main>
  )
}

