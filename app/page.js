export default function Home() {

  const menu = [

    {

      icon: "📅",

      title: "Citas",

      text: "Agenda y próximas citas",

      href: "/citas",

    },

    {

      icon: "✂️",

      title: "Barberos",

      text: "Equipo y horarios",

    },

    {

      icon: "👥",

      title: "Clientes",

      text: "Directorio de clientes",

    },

    {

      icon: "💰",

      title: "Ventas",

      text: "Ingresos y servicios",

    },

    {

      icon: "📊",

      title: "Reportes",

      text: "Rendimiento del negocio",

    },

    {

      icon: "⚙️",

      title: "Configuración",

      text: "Administrar barbería",

    },

  ];

  return (

    <main

      style={{

        minHeight: "100vh",

        background: "#050505",

        color: "white",

        fontFamily: "Arial, sans-serif",

        padding: "40px 20px",

      }}

    >

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        <p

          style={{

            color: "#d4af37",

            fontWeight: "bold",

            letterSpacing: "4px",

            fontSize: "18px",

          }}

        >

          DAZZLE | FLOW

        </p>

        <h1

          style={{

            fontSize: "48px",

            margin: "10px 0",

          }}

        >

          Panel de control

        </h1>

        <p

          style={{

            color: "#999",

            fontSize: "20px",

          }}

        >

          Dazzle Styles Barbershop

        </p>

        <div

          style={{

            background: "#111",

            border: "1px solid #333",

            borderRadius: "20px",

            padding: "25px",

            marginTop: "35px",

          }}

        >

          <div

            style={{

              color: "#999",

              fontSize: "18px",

            }}

          >

            Ventas de hoy

          </div>

          <div

            style={{

              color: "#d4af37",

              fontSize: "48px",

              fontWeight: "bold",

              marginTop: "10px",

            }}

          >

            $0.00

          </div>

          <div

            style={{

              color: "#888",

              marginTop: "5px",

            }}

          >

            0 servicios completados

          </div>

        </div>

        <div

          style={{

            display: "grid",

            gridTemplateColumns: "repeat(2, 1fr)",

            gap: "15px",

            marginTop: "25px",

          }}

        >

          {menu.map((item) => (

            <a

              key={item.title}

              href={item.href || "#"}

              style={{

                background: "#111",

                border: "1px solid #333",

                borderRadius: "18px",

                padding: "25px 20px",

                textDecoration: "none",

                color: "white",

                display: "block",

              }}

            >

              <div

                style={{

                  fontSize: "32px",

                  marginBottom: "20px",

                }}

              >

                {item.icon}

              </div>

              <div

                style={{

                  fontSize: "22px",

                  fontWeight: "bold",

                }}

              >

                {item.title}

              </div>

              <div

                style={{

                  color: "#999",

                  marginTop: "10px",

                  lineHeight: "1.4",

                }}

              >

                {item.text}

              </div>

            </a>

          ))}

        </div>

        <div

          style={{

            borderTop: "1px solid #d4af37",

            marginTop: "40px",

            paddingTop: "20px",

            textAlign: "center",

            color: "#777",

            fontSize: "12px",

          }}

        >

          DAZZLE STYLES · FLOW IS FLOW

        </div>

      </div>

    </main>

  );

}
