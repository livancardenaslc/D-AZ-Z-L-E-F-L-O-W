export default function Home() {

  const menu = [

    { icon: "📅", title: "Citas", text: "Agenda y próximas citas" },

    { icon: "✂️", title: "Barberos", text: "Equipo y horarios" },

    { icon: "👥", title: "Clientes", text: "Directorio de clientes" },

    { icon: "💰", title: "Ventas", text: "Ingresos y servicios" },

    { icon: "📊", title: "Reportes", text: "Rendimiento del negocio" },

    { icon: "⚙️", title: "Configuración", text: "Administrar barbería" },

  ];

  return (

    <main

      style={{

        minHeight: "100vh",

        background: "#050505",

        color: "#ffffff",

        fontFamily: "Arial, sans-serif",

        padding: "28px 20px 50px",

      }}

    >

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        <p

          style={{

            color: "#d4af37",

            fontWeight: "700",

            letterSpacing: "3px",

            marginBottom: "8px",

          }}

        >

          DAZZLE | FLOW

        </p>

        <h1 style={{ fontSize: "32px", margin: "0 0 8px" }}>

          Panel de control

        </h1>

        <p style={{ color: "#999", marginBottom: "30px" }}>

          Dazzle Styles Barbershop

        </p>

        <div

          style={{

            border: "1px solid #292929",

            borderRadius: "18px",

            padding: "22px",

            marginBottom: "25px",

            background: "#101010",

          }}

        >

          <span style={{ color: "#999" }}>Ventas de hoy</span>

          <h2

            style={{

              color: "#d4af37",

              fontSize: "38px",

              margin: "10px 0 5px",

            }}

          >

            $0.00

          </h2>

          <span style={{ color: "#777" }}>0 servicios completados</span>

        </div>

        <div

          style={{

            display: "grid",

            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",

            gap: "14px",

          }}

        >

          {menu.map((item) => (

            <div

              key={item.title}

              style={{

                background: "#101010",

                border: "1px solid #292929",

                borderRadius: "16px",

                padding: "20px",

              }}

            >

              <div style={{ fontSize: "28px", marginBottom: "14px" }}>

                {item.icon}

              </div>

              <h3 style={{ margin: "0 0 7px", fontSize: "18px" }}>

                {item.title}

              </h3>

              <p

                style={{

                  margin: 0,

                  color: "#888",

                  fontSize: "13px",

                  lineHeight: "1.4",

                }}

              >

                {item.text}

              </p>

            </div>

          ))}

        </div>

        <div

          style={{

            marginTop: "30px",

            borderTop: "1px solid #d4af37",

            paddingTop: "18px",

            color: "#777",

            fontSize: "12px",

            textAlign: "center",

          }}

        >

          DAZZLE STYLES · FLOW IS FLOW

        </div>

      </div>

    </main>

  );

}
