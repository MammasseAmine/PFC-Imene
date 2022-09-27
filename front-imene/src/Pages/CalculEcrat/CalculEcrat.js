import Navbar from "../../Components/Navbar/Navbar"
import Aside from "../../Components/SideBar/Sidebar"
import "./CalculEcrat.css"

const CalculEcrat = () => {
  return (
    <>
    <Navbar />

    <div id="ecrat">
      <Aside />
      <button className="ajouter">Ajouter <i class="fa fa-plus" aria-hidden="true"></i>
</button>
      <button className="ajouter m"  style={{"background" : "red"}}>Supprimer <i class="fa fa-trash"></i></button>
      <button className="ajouter s"  style={{"background" : "green"}}>Modifier <i class="fa fa-pencil" aria-hidden="true"></i></button>
      <div className="titre">
      <p>Navire : VASA BORG | port : 14</p>
      <p>Date accortage : 15/06/2022 | N° de GROS : 0</p>
      </div>
      <table>
	<tbody>
		<tr>
			<th>#</th>
			<th colspan="4" style={{"background" : "grey"}}>Manifestés</th>
			<th colspan="2" style={{"background" : "green"}}>Manipulès</th>
			<th colspan="2" style={{"background" : "red"}}>Ecrat</th>
		</tr>
		<tr className="sousHead">
			<td>id</td>
			<td>Marchendise</td>
			<td>Conditionnement</td>
			<td>Nbre de Colis</td>
			<td>Poids (kg)</td>
			<td>Nbre de Colis</td>
			<td>Poids (kg)</td>
			<td>Nbre de Colis</td>
			<td>Poids (kg)</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
    <tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
    <tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>
    </div>
    </>
  )
}

export default CalculEcrat