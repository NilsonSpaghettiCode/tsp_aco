let settings_map =
{
    idMap: "map",
    max_zoom: 19,
    zoom: 12,
    urlTemplate: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    atribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    initial_lat: -34.601243562899434,
    initial_lon: -58.39622247071027,
    radius_circle: 70000,
}

let settings_aco = 
{
    initial_feromone: 0.1,
    evaporation: 0.01,
    learning: 1,
    max_iterations:500,
    amount_ants:153,
    unidad: "K/M"
}

let settings_dom = 
{
    id_iteraciones_max: "iteraciones_totales",
    id_iteracion_i: "iteraciones_actuales",
    btn_start: "Start",
    btn_reset: "Reset",
    id_costo:"costo",
    id_table_data: "table_data"
}

export {settings_map, settings_aco, settings_dom}
