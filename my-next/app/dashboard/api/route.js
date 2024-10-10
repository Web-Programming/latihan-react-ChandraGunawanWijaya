export async function POST(){
    let data = [
        {
            'npm' : '00010001',
            'nama' : 'Chandra'
        },
        {
            'npm' : '2327250023',
            'nama' : 'Chandra'
        }
    ]
    // return Response.(
    //     <div>Hallo, This is Post</div>
    // )
    return Response.json(data)
}