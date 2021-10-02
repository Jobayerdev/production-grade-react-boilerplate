import { Navigate, PartialRouteObject } from "react-router-dom"

import { CreatePetBreedsPage } from "./pet-breed/routes/CreatePetBreedsPage"
import { PetBreedsPage } from "./pet-breed/routes/PetBreedsPage"
import PetDetailsPage from "./pet-profiles/routes/PetDetailsPage"
import PetLifeStyleCreatePage from "./pet-life-style/routes/PetLifeStyleCreatePage"
import PetLifeStyleListPage from "./pet-life-style/routes/PetLifeStyleListPage"
import PetLifeStyleUpdatePage from "./pet-life-style/routes/PetLifeStyleUpdatePage"
import PetProfileCreatePage from "./pet-profiles/routes/PetProfileCreatePage"
import PetProfileUpdatePage from "./pet-profiles/routes/PetProfileUpdatePage"
import PetProfilesPage from "./pet-profiles/routes/PetProfilesPage"
import { PetTypeCreatePage } from "./pet-type/routes/PetTypeCreatePage"
import { PetTypeListPage } from "./pet-type/routes/PetTypeListPage"
import { PetTypeUpdatePage } from "./pet-type/routes/PetTypeUpdatePage"
import { UpdatePetBreedsPage } from "./pet-breed/routes/UpdatePetBreedsPage"

const PetRoutes: PartialRouteObject[] = [
	{ path: "", element: <Navigate to="/pets/profile" /> },
	{
		path: "petLifeStyles",
		children: [
			{ path: "", element: <Navigate to="/pets/petLifeStyles/list" /> },
			{ path: "list", element: <PetLifeStyleListPage /> },
			{ path: "create", element: <PetLifeStyleCreatePage /> },
			{ path: "update/:id", element: <PetLifeStyleUpdatePage /> },
		],
	},
	{
		path: "petType",
		children: [
			{ path: "", element: <Navigate to="/pets/petType/list" /> },
			{ path: "list", element: <PetTypeListPage /> },
			{ path: "create", element: <PetTypeCreatePage /> },
			{ path: "update/:id", element: <PetTypeUpdatePage /> },
		],
	},
	{
		path: "profile",
		children: [
			{ path: "", element: <Navigate to="/pets/profile/list" /> },
			{ path: "/:id", element: <PetDetailsPage /> },
			{ path: "list", element: <PetProfilesPage /> },
			{ path: "create", element: <PetProfileCreatePage /> },
			{ path: "update/:id", element: <PetProfileUpdatePage /> },

		],
	},
	{
		path: "petBreeds",
		children: [
			{ path: "", element: <Navigate to="pets/petBreeds/list" /> },
			{ path: "list", element: <PetBreedsPage /> },
			{ path: "create", element: <CreatePetBreedsPage /> },
			{ path: "update/:id", element: <UpdatePetBreedsPage /> },
		]
	}

]

export default PetRoutes;