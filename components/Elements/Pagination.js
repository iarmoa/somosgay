import React from "react";
import Icon from "./Icon";
import Link from "next/link";

const Pagination = ({ totalPages, currentPage, url }) => {
  const urlLastPage = url + (totalPages - 1);
  const urlFirstPage = url + '0';
  const urlNextPage = url + (currentPage + 1);
  const urlPreviousPage = url + (currentPage - 1);

  const firstPages = [];
  for(let i = 0; i < 7; i++){
    firstPages.push(i);
  }

  const lastPages = [];
  if(totalPages - 5 >= 6){
    for(let i =  totalPages - 5; i <= totalPages; i++){
      lastPages.push(i);
    }
  }

  const filledPages = [];
  if(currentPage >= 6 && currentPage < totalPages - 5){ 
    if(currentPage !== 6)
      filledPages.push(currentPage);

    for(let i =  currentPage + 1; i < currentPage + 3; i++){
      filledPages.push(i);
    }    
  }

  const Pages = ({pages}) => (
    pages.map(number => (
        <li key={number}>
            <Link href={ url + number}>
                <a className={number === currentPage ? "active" : null} >
                    {number + 1}
                </a>
            </Link>
        </li>
    ))
  ); 

  return (
    <div className="clearfix">
      <ul className="pagination">
        <li>
            <Link href={urlFirstPage}>
                <a className={currentPage === 0 ? "isDisabled" : null}>
                    <Icon icon="icofont-curved-double-left" />
                </a>
            </Link>
        </li>
        <li>
            <Link href={urlPreviousPage}>
                <a className={currentPage === 0 ? "isDisabled" : null}>
                    <Icon icon="simple-left" />
                </a>
            </Link>
        </li>

            <Pages pages={firstPages} />
            { filledPages &&  <li><span href="/#" className="isDisabled">...</span></li>}
            <Pages pages={filledPages} />
            <li><span href="/#" className="isDisabled">...</span></li>
            <Pages pages={lastPages} />
            
        <li>
            <Link href={urlNextPage}>
                <a className={currentPage === totalPages ? "isDisabled" : null}>
                    <Icon icon="simple-right" />
                </a>
            </Link>
        </li>
        <li>
            <Link href={urlLastPage}>
                <a className={currentPage === totalPages ? "isDisabled" : null}>
                    <Icon icon="icofont-curved-double-right" />
                </a>
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
