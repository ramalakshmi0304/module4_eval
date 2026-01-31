import supabase from "../config/supabase";

export const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body

        const { data: userexisting } = await supabase
            .from("users2")
            .select("id")
            .eq(email, "email")
            .single()

        if (userexisting)
            return res.status(409).json({ message: "user already exisits" })

        const { data, error } = await supabase
            .from("users2")
            .insert([{
                name,
                email,
                password,
                role
            }])

        if (error)
            return res.status(500).json({ message: "internal server error" })

        res.status(201).json({ message: "signup created successful" })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const login = (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password)
            return res.status(400).json("invalid credentials")

        const { data, error } = await supabase
            .from("users2")
            .select("id")
            .eq(email, "email")
            .eq(password, "password")
            .single()
        if (error)
            return res.status(500).json({ message: "internal server error" })

        res.status(200).json({ message: "login successful" },data=(users2.name))

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}