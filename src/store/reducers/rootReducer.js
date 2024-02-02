const initState = {
    users:[]
}

const rootReducer = (state = initState,action)=>{
    switch(action.type) {
        case 'ADD_TO_SHOP':
          const userInCart = state.users.find((user)=> user.id === action.payload.id);
          if(!userInCart){
            
            return{
                users:[...state.users,action.payload]
            };
            
          }
          else{
            let newShop = state.users
            const objIndex = newShop.findIndex(
                (obj)=>obj.id === action.payload.id
            );
            if(newShop[objIndex].quantity===undefined){
                newShop[objIndex].quantity=2;
            }
            else{
                newShop[objIndex].quantity=newShop[objIndex].quantity+1;
            }
            return{
                users:[...newShop]
            }
            }
            
        case 'DELETE_TO_SHOP':
            let users = state.users
            users = users.filter((user)=>user.id !== action.payload.id)
            return{
                users
            }
        case 'UP_TO':
            let upto = state.users;
            const objUpto = upto.findIndex(
                (obj)=>obj.id === action.payload.id
            );
                if(upto[objUpto].quantity===undefined){
                    upto[objUpto].quantity=2
                }
                else{
                    upto[objUpto].quantity=upto[objUpto].quantity+1
                }
            return{
                    users:[...upto]
                }
         case 'DOWN_TO':
            let downto= state.users;
            const objDownto = downto.findIndex(
                (obj)=>obj.id === action.payload.id
            );
            if(downto[objDownto].quantity < 2 || downto[objDownto].quantity===undefined){
                downto[objDownto].quantity=1;
            }
            else{
                downto[objDownto].quantity=downto[objDownto].quantity-1
            }
            return{
                users:[...downto]
            }
         case 'DELETE_ALL':
            let deleteall = state.users;
            deleteall = [];
            return{
                users:[...deleteall]
            }
        default:
            return state;
      }
    
}

export default rootReducer;