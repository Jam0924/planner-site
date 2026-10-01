import './DashboardToDo.css'
import { useState, useEffect } from 'react'


function DashboardToDo(){
    return(
        <>

        <div className = "toDoListCategoryLabel">
            <p className = "toDoListCategoryLabelText">CATEGORY</p>
            <hr className = "toDoListCategoryLabelDivider"/>
        </div>

        <div className = "toDoListItem">
            <div className = "toDoListItemCheck">
                <div className = "toDoListItemCheckIconHitbox">
                    <div className = "toDoListItemCheckIcon"></div>
                </div>
            </div>
            <div className="toDoListItemTitle">
                <p className = "toDoListItemTitleText">title title title title title title title title title title title</p></div>
            <div className="toDoListItemTagContainer">
                <div className = "toDoListItemTag">
                    <p className = "toDoListItemTagText">Saturday, September 26</p>
                </div>
                <div className = "toDoListItemRightTagBundle">
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">studying</p>
                    </div>
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">class</p>
                    </div>
                    <div className = "toDoListItemExpand toDoListItemTag">
                        <p className = "toDoListItemTagText">Expand</p>
                    </div>
                </div>
            </div>
        </div>

        <div className = "toDoListItem">
            <div className = "toDoListItemCheck">
                <div className = "toDoListItemCheckIconHitbox">
                    <div className = "toDoListItemCheckIcon"></div>
                </div>
            </div>
            <div className="toDoListItemTitle">
                <p className = "toDoListItemTitleText">title title title title title title title title title title title</p></div>
            <div className="toDoListItemTagContainer">
                <div className = "toDoListItemTag">
                    <p className = "toDoListItemTagText">Saturday, September 26</p>
                </div>
                <div className = "toDoListItemRightTagBundle">
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">studying</p>
                    </div>
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">class</p>
                    </div>
                    <div className = "toDoListItemExpand toDoListItemTag">
                        <p className = "toDoListItemTagText">Expand</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className = "toDoListCategoryLabel">
            <p className = "toDoListCategoryLabelText">CATEGORY</p>
            <hr className = "toDoListCategoryLabelDivider"/>
        </div>

        <div className = "toDoListItem">
            <div className = "toDoListItemCheck">
                <div className = "toDoListItemCheckIconHitbox">
                    <div className = "toDoListItemCheckIcon"></div>
                </div>
            </div>
            <div className="toDoListItemTitle">
                <p className = "toDoListItemTitleText">title title title title title title title title title title title</p></div>
            <div className="toDoListItemTagContainer">
                <div className = "toDoListItemTag">
                    <p className = "toDoListItemTagText">Saturday, September 26</p>
                </div>
                <div className = "toDoListItemRightTagBundle">
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">studying</p>
                    </div>
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">class</p>
                    </div>
                    <div className = "toDoListItemExpand toDoListItemTag">
                        <p className = "toDoListItemTagText">Expand</p>
                    </div>
                </div>
            </div>
        </div>

        <div className = "toDoListItem">
            <div className = "toDoListItemCheck">
                <div className = "toDoListItemCheckIconHitbox">
                    <div className = "toDoListItemCheckIcon"></div>
                </div>
            </div>
            <div className="toDoListItemTitle">
                <p className = "toDoListItemTitleText">title title title title title title title title title title title</p></div>
            <div className="toDoListItemTagContainer">
                <div className = "toDoListItemTag">
                    <p className = "toDoListItemTagText">Saturday, September 26</p>
                </div>
                <div className = "toDoListItemRightTagBundle">
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">studying</p>
                    </div>
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">class</p>
                    </div>
                    <div className = "toDoListItemExpand toDoListItemTag">
                        <p className = "toDoListItemTagText">Expand</p>
                    </div>
                </div>
            </div>
        </div>

        <div className = "toDoListItem">
            <div className = "toDoListItemCheck">
                <div className = "toDoListItemCheckIconHitbox">
                    <div className = "toDoListItemCheckIcon"></div>
                </div>
            </div>
            <div className="toDoListItemTitle">
                <p className = "toDoListItemTitleText">title title title title title title title title title title title</p></div>
            <div className="toDoListItemTagContainer">
                <div className = "toDoListItemTag">
                    <p className = "toDoListItemTagText">Saturday, September 26</p>
                </div>
                <div className = "toDoListItemRightTagBundle">
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">studying</p>
                    </div>
                    <div className = "toDoListItemTag">
                        <p className = "toDoListItemTagText">class</p>
                    </div>
                    <div className = "toDoListItemExpand toDoListItemTag">
                        <p className = "toDoListItemTagText">Expand</p>
                    </div>
                </div>
            </div>
        </div>

          </>
    )
}

export default DashboardToDo