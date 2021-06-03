pragma solidity >=0.7.0 <0.9.0;

contract FoodDeliver {
    
    event NewOrder(string _oTime, string _cTime, string _dtime);
    
    struct Order {
       string orderTime;
       string cookTime;
       string deliverTime;
    }
    
    Order[] public orders;
    
    mapping (uint => address) public orderToCustomer;
    mapping (address => uint) customerOrderCount;
    
    function clearOrders() public {
        delete orders;
    }

    function createOrder(string memory _oTime, string memory _cTime, string memory _dtime) public {
        orders.push(Order(_oTime, _cTime, _dtime));
        orderToCustomer[orders.length-1] = msg.sender;
        customerOrderCount[msg.sender]++;
        emit NewOrder(_oTime, _cTime, _dtime);
    }
    
    function getOrdersByCust(address _cust) external view returns(uint[] memory) {
        uint[] memory result = new uint[](customerOrderCount[_cust]);
        uint counter = 0;
        for (uint i = 0; i < orders.length; i++) {
          if (orderToCustomer[i] == _cust) {
            result[counter] = i;
            counter++;
          }
        }
        return result;
    }
}