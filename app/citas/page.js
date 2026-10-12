export default function Citas() {

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

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        <a

          href="/"

          style={{

            color: "#d4af37",

            textDecoration: "none",

            fontSize: "16px",

          }}

        >

          ← Volver al panel

        </a>

        <p

          style={{

            color: "#d4af37",

            fontWeight: "700",

            letterSpacing: "3px",

            marginTop: "30px",

          }}

        >

          DAZZLE | FLOW

        </p>

        <h1 style={{ fontSize: "36px", marginBottom: "8px" }}>

          Citas

        </h1>

        <p style={{ color: "#999", marginBottom: "30px" }}>

          Agenda de Dazzle Styles Barbershop

        </p>

        <div

          style={{

            background: "#101010",

            border: "1px solid #292929",

            borderRadius: "18px",

            padding: "22px",

            marginBottom: "18px",

          }}

        >

          <h2 style={{ marginTop: 0 }}>📅 Citas de hoy</h2>

          <p style={{ color: "#999" }}>

            No hay citas registradas todavía.

          </p>

        </div>

        <button

          style={{

            width: "100%",

            padding: "17px",

            borderRadius: "14px",

            border: "none",

            background: "#d4af37",

            color: "#050505",

            fontSize: "17px",

            fontWeight: "700",

          }}

        >

          + Nueva cita

        </button>

      </div>

    </main>

  );

}
