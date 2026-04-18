import { useForm } from "react-hook-form"

export default function WritingWorkshopForm({ onSubmit }) {
    const { register, handleSubmit } = useForm();

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form" id="session-form">
                <input type="text" placeholder="Nom de la session" {...register("title")} />
                <textarea placeholder="Prompt" {...register("prompt")} />
                <input type="number" max={100} min={1} placeholder="Nombre de joueurs max" {...register("max_participants")} />
            </form>
        </div>
    );
}