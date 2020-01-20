import React from "react";
export default function Pagination({pager, onChange}) {
    const click = (page) => {
        if (pager.currentPage === page) {
            return;
        }

        onChange(page);
    };
    
    return (
        <div className="card-footer pb-0 pt-3 custom-pagination">
            {pager.totalPages > 0 &&
            <ul className="pagination">
                <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        onClick={() => click(pager.startPage)}
                        className="page-link">First</button>
                </li>
                <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        onClick={() => click(pager.currentPage - 1)}
                        className="page-link">Previous</button>
                </li>
                {pager.pages.map(page =>
                    <li key={page}
                        className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                        <button onClick={() => click(page)} className="page-link">{page}</button>
                    </li>
                )}
                <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                    <button
                        onClick={() => click(pager.currentPage + 1)}
                        className="page-link">Next</button>
                </li>
                <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                    <button
                        onClick={() => click(pager.totalPages)}
                        className="page-link">Last</button>
                </li>
            </ul>
            }
        </div>
    )
}
