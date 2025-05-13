import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

 function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       if (form.password !== form.confirmPassword) {
            setError("As senhas não coincidem");
            return;
        }
        try {
            await register(form);
            setSuccess(true);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (err) {
            setError('Erro ao registrar, tente novamente');
            console.error(err); 
        }
    };

    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirmar Senha"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                />
                <button type="submit">Registrar</button>
            </form>
            {error && <p>{error}</p>}
            {success && <p>Registrado com sucesso!</p>}
        </div>
    );
}

export default Register;