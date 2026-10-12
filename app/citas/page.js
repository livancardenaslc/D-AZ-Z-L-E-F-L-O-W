"use client";

import { useEffect, useState } from "react";

export default function Citas() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [citas, setCitas] = useState([]);

  const [cargado, setCargado] = useState(false);

  const [form, setForm] = useState({

    cliente: "",

    telefono: "",

    fecha: "",

    hora: "",

    servicio: "",

    barbero: "",

  });

  // Cargar citas guardadas

  useEffect(() => {

    try {

      const guardadas = localStorage.getItem("dazzle_citas");

      if (guardadas) {

        setCitas(JSON.parse(guardadas));

      }

    } catch (error) {

      console.error("Error al cargar citas:", error);

    }

    setCargado(true);

  }, []);

  // Guardar citas automáticamente

  useEffect(() => {

    if (!cargado) return;

    try {

      localStorage.setItem("dazzle_citas", JSON.stringify(citas));

    } catch (error) {

      console.error("Error al guardar citas:", error);

    }

  }, [citas, cargado]);

  function guardarCita(e) {

    e.preventDefault();

    if (!form.cliente || !form.fecha || !form.hora) {

      alert("Completa nombre, fecha y hora.");

      return;

    }

    const nuevaCita = {

      ...form,

      id: Date.now(),

    };

    setCitas((anteriores) => [...anteriores, nuevaCita]);

    setForm({

      cliente: "",

      telefono: "",

      fecha: "",

      hora: "",

      servicio: "",

      barbero: "",

    });

    setMostrarFormulario(false);

  }

  function eliminarCita(id) {

    const confirmar = window.confirm(

      "¿Seguro que quieres eliminar esta cita?"

    );

    if (!confirmar) return;

    setCitas((anteriores) =>

      anteriores.filter((cita) => cita.id !== id)

    );

  }

  const campo = {

    width: "100%",

    boxSizing: "border-box",

    padding: "14px",

    marginBottom: "12px",

    borderRadius: "10px",

    border: "1px solid #333",

    background: "#111",

    color: "white",

    fontSize: "16px",

  };

  return (

    <main

      style={{

        minHeight: "100vh",

        background: "#050505",

        color: "white",

        fontFamily: "Arial, sans-serif",

        padding: "28px 20px",

      }}

    >

      <div

        style={{

          maxWidth: "900px",

          margin: "0 auto",

        }}

      >

        <a

          href="/"

          style={{

            color: "#d4af37",

            textDecoration: "none",

            fontSize: "18px",

          }}

        >

          ← Volver al panel

        </a>

        <p

          style={{

            color: "#d4af37",

            fontWeight: "bold",

            letterSpacing: "4px",

            marginTop: "35px",

          }}

        >

          DAZZLE | FLOW

        </p>

        <h1

          style={{

            fontSize: "48px",

            marginBottom: "10px",

          }}

        >

          Citas

        </h1>

        <p

          style={{

            color: "#999",

            fontSize: "20px",

          }}

        >

          Agenda de Dazzle Styles Barbershop

        </p>

        <div

          style={{

            background: "#111",

            border: "1px solid #333",

            borderRadius: "20px",

            padding: "25px",

            marginTop: "30px",

          }}

        >

          <h2>📅 Citas registradas</h2>

          {citas.length === 0 ? (

            <p

              style={{

                color: "#999",

                fontSize: "18px",

              }}

            >

              No hay citas registradas todavía.

            </p>

          ) : (

            citas.map((cita) => (

              <div

                key={cita.id}

                style={{

                  borderTop: "1px solid #333",

                  padding: "18px 0",

                }}

              >

                <strong

                  style={{

                    fontSize: "19px",

                  }}

                >

                  {cita.cliente}

                </strong>

                {cita.telefono && (

                  <div

                    style={{

                      color: "#aaa",

                      marginTop: "7px",

                    }}

                  >

                    📞 {cita.telefono}

                  </div>

                )}

                <div

                  style={{

                    color: "#aaa",

                    marginTop: "7px",

                  }}

                >

                  📅 {cita.fecha} · ⏰ {cita.hora}

                </div>

                {cita.servicio && (

                  <div

                    style={{

                      color: "#aaa",

                      marginTop: "5px",

                    }}

                  >

                    ✂️ {cita.servicio}

                  </div>

                )}

                {cita.barbero && (

                  <div

                    style={{

                      color: "#aaa",

                      marginTop: "5px",

                    }}

                  >

                    👤 {cita.barbero}

                  </div>

                )}

                <button

                  type="button"

                  onClick={() => eliminarCita(cita.id)}

                  style={{

                    marginTop: "15px",

                    padding: "10px 15px",

                    borderRadius: "8px",

                    border: "1px solid #555",

                    background: "transparent",

                    color: "#bbb",

                    cursor: "pointer",

                  }}

                >

                  🗑️ Eliminar

                </button>

              </div>

            ))

          )}

        </div>

        {!mostrarFormulario ? (

          <button

            type="button"

            onClick={() => setMostrarFormulario(true)}

            style={{

              width: "100%",

              marginTop: "25px",

              padding: "18px",

              border: "none",

              borderRadius: "15px",

              background: "#d4af37",

              color: "black",

              fontSize: "20px",

              fontWeight: "bold",

              cursor: "pointer",

            }}

          >

            + Nueva cita

          </button>

        ) : (

          <form

            onSubmit={guardarCita}

            style={{

              marginTop: "25px",

              padding: "25px",

              background: "#111",

              border: "1px solid #333",

              borderRadius: "20px",

            }}

          >

            <h2>Nueva cita</h2>

            <input

              style={campo}

              placeholder="Nombre del cliente"

              value={form.cliente}

              onChange={(e) =>

                setForm({

                  ...form,

                  cliente: e.target.value,

                })

              }

            />

            <input

              style={campo}

              type="tel"

              placeholder="Teléfono"

              value={form.telefono}

              onChange={(e) =>

                setForm({

                  ...form,

                  telefono: e.target.value,

                })

              }

            />

            <input

              style={campo}

              type="date"

              value={form.fecha}

              onChange={(e) =>

                setForm({

                  ...form,

                  fecha: e.target.value,

                })

              }

            />

            <input

              style={campo}

              type="time"

              value={form.hora}

              onChange={(e) =>

                setForm({

                  ...form,

                  hora: e.target.value,

                })

              }

            />

            <input

              style={campo}

              placeholder="Servicio"

              value={form.servicio}

              onChange={(e) =>

                setForm({

                  ...form,

                  servicio: e.target.value,

                })

              }

            />

            <input

              style={campo}

              placeholder="Barbero"

              value={form.barbero}

              onChange={(e) =>

                setForm({

                  ...form,

                  barbero: e.target.value,

                })

              }

            />

            <button

              type="submit"

              style={{

                width: "100%",

                padding: "16px",

                border: "none",

                borderRadius: "12px",

                background: "#d4af37",

                color: "black",

                fontSize: "18px",

                fontWeight: "bold",

                cursor: "pointer",

              }}

            >

              Guardar cita

            </button>

            <button

              type="button"

              onClick={() => setMostrarFormulario(false)}

              style={{

                width: "100%",

                padding: "14px",

                marginTop: "10px",

                border: "1px solid #444",

                borderRadius: "12px",

                background: "transparent",

                color: "white",

                fontSize: "16px",

                cursor: "pointer",

              }}

            >

              Cancelar

            </button>

          </form>

        )}

      </div>

    </main>

  );

}

  


