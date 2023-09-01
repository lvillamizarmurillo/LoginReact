use("db_login_react");
db.createCollection("usuarios",
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombres", "edad", "password", "email"],
            properties: {
                nombres: {
                    bsonType: "string",
                    description: "El nombre es obligatorio y debe ser string"
                },
                edad: { bsonType: "int", minimum: 0, description: "La edad es obligatoria y debe ser un número entero." },
                password: { bsonType: "string", description: "La contraseña es obligatoria y debe ser de tipo string." },
                email: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                    description: "El email es obligatorio"
                }
            }
        }
    }
});

use("db_login_react");
db.usuarios.insertMany([
    {
        nombres: "Juan",
        edad: 25,
        password: "852",
        email: "juan@gmail.com"
    },
    {
        nombres: "Pedro",
        edad: 22,
        password: "789",
        email: "pedro@gmail.com"
    },
    {
        nombres: "Jhoan",
        edad: 20,
        password: "123",
        email: "jhoan@gmail.com"
    }
])