
export const Form = ({ termo, setTermo, handleBuscar }) => (
<form onSubmit={handleBuscar} style={{display:"flex",justifyContent: "center",gap:"12px", marginBottom: "50px"}}>
        <input
          type="text"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          placeholder="Digite o nome da música"
          style={{borderRadius: "15px", border: "2px solid #1DB954", paddingLeft: "10px", paddingRight:"10px", backgroundColor: "#242424", color: "#1DB954"}}
        />
        <button style={{borderRadius: "15px", color: "#242424", backgroundColor: "#1DB954"}}type="submit">Buscar</button>
      </form>
)
export default Form;